import React, { useState } from 'react';
import { Timeline, Spin } from 'antd';
import { styles } from '../utils/styles'

var isfetch = false;

function TimeLine() {
  const [commit_history, setCommit_history] = useState([]);

  const get_commit_history = async () => {
    let commit_history_ = [];
    for( let i=1; i<4; i++ ) {
      commit_history_.push(...await fetch(`https://api.github.com/repos/jiandandaoxingfu/maple-latex/commits?page=${i}`)
        .then( x => x.json() )
        .then( x => {
          let commit_history_ = x.map( commit => {
                let date = new Date(commit.commit.author.date);
                date = date.toJSON().split('T')[0] + ' ' + date.toTimeString().split('G')[0];
                return { 
                  date: date,
                  msg: commit.commit.message.replace(/\n+/g, '\n').split('\n') 
                };
              })
              .filter( commit => ( commit.msg[0].indexOf('Merge') + commit.msg[0].indexOf('Bump') ) < -1 );
          return commit_history_
        })
        .catch( e => {
          isfetch = false;
          return [];
        } )
      )
    }
    console.log(commit_history_);
    setCommit_history(commit_history_);
  }
  
  return (
    <div id='timeline' style={ styles.timeline } 
      onClick={ () => { 
          document.getElementById('timeline').style.zIndex = document.getElementById('timeline').style.zIndex === '-3' ? 3 : -3; 
          document.getElementById('timeline').style.display = document.getElementById('timeline').style.display !== 'block' ? 'block' : 'none';
          if( isfetch ) return;
          isfetch = true;
          get_commit_history();
        } } >
      <div id='timeline-container'>
      {
        commit_history?.[0] ? 
          <Timeline mode="left">
            { 
              commit_history.map( commit => 
                <Timeline.Item label={ commit.date }>
                  <p><h2>{ commit.msg[0] }</h2></p>
                  {   
                    commit.msg.slice(1).map( desc => <p> { desc } </p>)
                  }
                </Timeline.Item>
              )
            }
          </Timeline>
        :
          <Spin size='large' />
      }
      </div>
    </div>
  )
}

export default TimeLine;