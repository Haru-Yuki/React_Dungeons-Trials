import {Box, Typography} from "@mui/material";

const HeaderDescription = () => {
    return (
        <>
            <Box sx={{
                width: 500
            }}>
                <Typography variant="body1" sx={{
                    fontSize: 32,
                    color: 'text.primary',
                    textAlign: 'center'
                }}>
                    This tool will help you to track dungeons, trials and raids progress in Final Fantasy XIV
                </Typography>
            </Box>
        </>
    )
}

export default HeaderDescription;