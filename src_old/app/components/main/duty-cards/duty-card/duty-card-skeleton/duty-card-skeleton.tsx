import {Box, Grid, Skeleton} from "@mui/material";

const DutyCardSkeleton = () => {
    return (
        <Grid item xs={6} md={4} lg={4} xl={3} sx={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            backgroundClip: 'content-box',
        }}>
            <Box>
                <Skeleton animation="wave" variant="rectangular"  height={250} />
                <Skeleton animation="wave"  variant="text" sx={{ fontSize: '2.5rem', margin: '10px 10px 30px' }} />
                <Skeleton animation="wave"  variant="text" sx={{ fontSize: '1.5rem', marginLeft: '10px', float: 'left', width: '150px' }} />
                <Skeleton animation="wave"  variant="text" sx={{ fontSize: '1.5rem', marginRight: '10px', float: 'right', width: '70px' }} />
                <Skeleton animation="wave"  variant="text" sx={{ fontSize: '1.5rem', float: 'right', width: '70px', margin: '0 10px' }} />
                <Skeleton animation="wave"  variant="circular" width={40} height={40} sx={{ float: 'right', margin: '35px 10px 10px', clear: 'both' }} />
            </Box>
        </Grid>
    )
}

export default DutyCardSkeleton;