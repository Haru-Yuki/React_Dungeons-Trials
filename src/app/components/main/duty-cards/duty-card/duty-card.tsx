import Duty from "../../../../models/duty.model";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    IconButton,
    IconButtonProps,
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

const isLoggedIn = false;

const DutyCard = (props: Duty) => {
    const {
        name,
        imageLink,
        patchName,
        level,
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
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={imageLink}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" sx={{textAlign: 'center'}}>
                        {name}
                    </Typography>
                    <Typography paragraph sx={{float: 'right'}}>
                        Level: {level}
                    </Typography>
                    <Typography paragraph>
                        Patch: {patchName}
                    </Typography>
                </CardContent>
            </CardActionArea>
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