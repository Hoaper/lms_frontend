import React, {useState} from 'react';
import {Alert, AlertProps, Snackbar} from "@mui/material";


const Index = ({children, severity, icon}: AlertProps) => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity} icon={icon} onClose={handleClose}>
                {children}
            </Alert>
        </Snackbar>
    );
};

export default Index;