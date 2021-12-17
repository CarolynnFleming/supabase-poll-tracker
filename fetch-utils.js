const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5Njk2NTM5LCJleHAiOjE5NTUyNzI1Mzl9.GNADCbK-_3MbuUNpFXS0PmpgtSSGY5NVGHELxDsuPaQ';

export async function getUser() {
    return client.auth.user();
}

export function checkedLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}

const SUPABASE_URL = 'https://fkbqhgwptgftodgoyhfg.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

