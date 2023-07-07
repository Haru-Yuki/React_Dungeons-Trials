import Duty from "../../../../models/duty.model";
import {
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
import Link from "next/link";
import {useSearchParams} from "react-router-dom";

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
    const {
        name,
        dutyType,
        imageLink,
        patchName,
        level,
        iLevel,
        description
    } = props;

    const [searchParams] = useSearchParams();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleLinkClick = () => {
        sessionStorage.setItem('urlQuery', JSON.stringify({
            duty: searchParams.get('duty') || '',
            expansion: searchParams.get('expansion') || '',
            sort: searchParams.get('sort') || '',
            name: searchParams.get('name') || ''
        }));
    }

    return (
        <Card sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <CardActionArea sx={{height: 250}}>
                <Link onClick={handleLinkClick} href={`/${dutyType}/${name}`} passHref>
                    <Image
                        src={imageLink}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    >
                    </Image>
                </Link>
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