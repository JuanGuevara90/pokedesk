import {useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const DetailPokemon = ({feactures}) => {

    console.log(feactures); 

     // Hooks para el modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return ( 
        <div className="detail-pokemon">
            {feactures &&(
                <div>
                    <Card  sx={{ maxWidth: 345 }}>
                        <CardMedia
                        component="img"
                        height="400"
                        image={feactures.sprites.other.home.front_default}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name: {feactures.name.toUpperCase() }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Weight: {feactures.weight}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            
                            <Button  size="small" onClick={handleOpen}>More details</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Name: {feactures.name.toUpperCase() }
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                    <Typography id="modal-modal-" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                    <Typography id="modal-modal-2" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Modal>
                        </CardActions>
                    </Card>
                </div>
            )
            }
        </div>
    );
}

export default DetailPokemon;