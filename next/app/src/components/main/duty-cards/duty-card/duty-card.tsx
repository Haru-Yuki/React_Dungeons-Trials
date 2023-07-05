import Duty from "../../../../models/duty.model";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Collapse,
    IconButton,
    IconButtonProps,
    styled,
    Typography
} from "@mui/material";
import {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const isLoggedIn = false;

const DutyCard = (props: Duty) => {
    const {
        name,
        imageLink,
        patchName,
        level,
        iLevel,
        description,
        completed,
        favourite
    } = props;

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const cardBorder = isLoggedIn && completed ? '1px solid green' : 'none';

    return (
        <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: cardBorder
        }}>
            <CardActionArea sx={{height: 250}}>
                <Image
                    src={imageLink}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                >
                </Image>
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant='h5' sx={{
                    textAlign: 'center',
                    minHeight: '60px',
                    marginBottom: '10px'
                }}>
                    {name}
                </Typography>
                <Typography paragraph sx={{float: 'right'}}>
                    Level: {level}
                </Typography>
                <Typography paragraph sx={{float: 'right', marginRight: '10px'}}>
                    IL: {iLevel ? iLevel: '-'}
                </Typography>
                <Typography paragraph>
                    Patch: {patchName}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
                {isLoggedIn &&
                    <>
                        <Button variant={completed ? "contained" : "outlined"} color="success" size="small">Mark as completed</Button>
                        <Button variant={favourite ? "contained" : "outlined"} color="warning" size="small">Mark as favourite</Button>
                    </>
                }
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default DutyCard;