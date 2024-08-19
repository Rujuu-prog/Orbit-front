const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ENDPOINTS = {
    // GET
    HEALTH: `${API_BASE_URL}/health`,
    // POST
    TOKEN: `${API_BASE_URL}/token`,
    // GET / POST / PUT / DELETE
    TASKS: `${API_BASE_URL}/tasks`,
} as const;
