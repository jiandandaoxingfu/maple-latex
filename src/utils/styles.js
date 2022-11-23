export const styles = {
  app: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
    left: {
      display: 'flex',
      width: '50%',
      height: '100%',
      minWidth: '100px',
      minHeight: '300px',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // border: '2px solid red'
    },
      header: {
        backgroundColor: 'white',
        lineHeight: '20px',
        padding: '10px',
        overflowY: 'auto',
        height: '120px',
        borderBottom: '6px solid #f0f2f5'
      },
        button: {
          borderRadius: '3px',
          margin: '2px',
          padding: '5px 10px'
        },
      textarea: {
        overflowY: 'auto',
        width: '100%',
        padding: '10px 10px',
        outline: 'none',
        border: 'none',
        flexGrow: 1,
        // border: '2px solid blue'
      },
      footer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        padding: '10px 5px 10px 5px',
        background: '#f0f2f5'
      },
  
    output: {
      minWidth: '100px',
      minHeight: '300px',
      height: '100%',
      flexGrow: 1,
      background: 'white',
      padding: '20px 20px',
      overflowY: 'auto',
      borderLeft: '6px solid #f0f2f5',
      // border: '2px solid green'
    },

    tip: {
      position: 'absolute',
      height: '30px',
      top: '130px',
      left: '0',
      right: '0',
      margin: '0 auto',
      textAlign: 'center',
      zIndex: '2',
      display: 'none'
    },
    timeline: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      minHeight: '100%',
      zIndex: '-3',
      backgroundColor: 'white',
    }
}