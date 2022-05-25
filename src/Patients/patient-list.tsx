
import Box from '@mui/material/Box';
import { Grid, Card, CardHeader, CardContent, Divider, Button, Typography } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Link } from "react-router-dom"

function PatientList() {

  return (
    <>
        <Box display="flex" mb={3} justifyContent="space-between">
            <Box >
                <Typography variant="h5" component="h5" gutterBottom sx={{ mt: 2.5 }} >
                    Patient List
                </Typography>
            </Box>
                                
                <Button
                    component={Link} to="/patients/register"
                    sx={{ mt: { xs: 2, md: 0 } }}
                    variant="contained"
                    startIcon={<AddTwoToneIcon fontSize="small" />}
                    >
                    Register Patient
                </Button>
            
        </Box>
        
    </>
  );
}

export default PatientList;
