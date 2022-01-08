const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY5NjUzOSwiZXhwIjoxOTU1MjcyNTM5fQ.YxyYiFuKHQ7yuJsaHERRhZ-v3N0IDr2KUoD5YXhdKzc';

const SUPABASE_URL = 'https://fkbqhgwptgftodgoyhfg.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function savePoll(question, choice1, pick1, choice2, pick2) {
    const response = await client
        .from('poll')
        .insert([
            {
                question,
                choice_1: choice1,
                choice_2: choice2,
                pick_1: pick1,
                pick_2: pick2,
            },
        ]);
    return response.data;
} 

export async function getPolls() {
    const response = await client
        .from('poll')
        .select();
    return response.data;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function getUser() {
    return client.auth.user();
}

export function checkLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}
export async function signUp(realEmail, realPassword) {
    console.log('before sign up', client.auth.user());

    const response = await client.auth.signUp({
        email: realEmail,
        password: realPassword,
    });

    console.log('after sign up', client.auth.user());

    return response.user;
}

