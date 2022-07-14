import React from 'react';
import { Box, FormControl, IconButton, makeStyles, OutlinedInput, Typography } from '@material-ui/core'
import { Controller } from 'react-hook-form'
const useStyles = makeStyles((theme) => ({
  root: {},
  
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '150px',
        
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label } = props;
  const { errors, setValue } = form;

 return (
   <FormControl
     fullWidth
     margin="normal"
     variant="outlined"
     size="small"
   >
     <Typography>{label}</Typography>
     <Controller
       name={name}
       control={form.control}
       render={({ onChange, onBlur, value, name }) => (
         <Box className={classes.box}>
           <IconButton onClick={()=> setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                   -
           </IconButton>
           <OutlinedInput
             id={name}
             type="text"
             value={value}
             onChange={onChange}
             onBlur={onBlur}
           />
           <IconButton onClick={()=> setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                 +
           </IconButton>
         </Box>
       )}
       />
   </FormControl>
 );   
}
export default QuantityField;