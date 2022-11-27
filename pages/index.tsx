import Box from '@mui/material/Box';
import { signIn, useSession } from 'next-auth/react';

const Home = () => {
    const session = useSession();

    console.log(session);

    const signInHandler = async () => {
        const result = await signIn('credentials', {
            redirect: false,
            email: 'test@email.com',
            password: 'enteredPassword',
        });

        console.log(result);
    };

    return (
        <Box>
            <h1>Main Page</h1>
            <button onClick={signInHandler}>Sign In</button>
        </Box>
    );
};

export default Home;
