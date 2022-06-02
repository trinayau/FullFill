import {Button, styled, Typography} from "@mui/material"
import {SettingsIcon, Add} from '@mui/icons-material';
function App() {

  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: 'white',
    fontWeight: 'bold',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  });
  return (
    <div className="App">
      <header className="App-header">
       <Button startIcon={<Add />}variant="contained" color="success" size="small">Text</Button>
       <Typography variant="h1" component="h2">
          Hello World!
         </Typography>
         <Button variant="contained" sx={{
           backgroundColor: 'skyblue',
           margin:5,
           "&:hover": {
              backgroundColor: 'lightblue',
           }
         }}>My unique button</Button>
          <BlueButton variant="contained" color="primary" size="small">YOYOYO</BlueButton>
      </header>
    </div>
  );
}

export default App;
