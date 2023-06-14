import Duty from "../../../models/duty.model";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Collapse, IconButton, IconButtonProps,
    styled,
    Typography
} from "@mui/material";
import {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const DutyCard = (props: Duty) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.imageLink}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" sx={{textAlign: 'center'}}>
                        {props.name}
                    </Typography>
                    <Typography paragraph sx={{float: 'right'}}>
                        Level: {props.level}
                    </Typography>
                    <Typography paragraph>
                        Patch: {props.patchName}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: 'space-evenly'}}>
                <Button variant="outlined" color="success" size="small">Mark as completed</Button>
                <Button variant="outlined" color="warning" size="small">Mark as favourite</Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default DutyCard;