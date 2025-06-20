interface Headers {
  [key: string]: string;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Headers;

  constructor(baseURL: string, customHeaders: Headers = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...customHeaders
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    if (options.body && typeof options.body === 'object') {
      options.body = JSON.stringify(options.body);
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error: any = new Error(
        'An error occurred while fetching the data.'
      );
      error.info = await response.json().catch(() => response.statusText);
      error.status = response.status;

      throw error;
    }
    //skip 204 status and non-JSON responses
    const contentType = response.headers.get('Content-Type');
    if (
      response.status === 204 ||
      !contentType ||
      !contentType.includes('application/json')
    ) {
      return {} as T;
    }

    return response.json();
  }

  get endpoint() {
    return this.baseURL;
  }

  get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body });
  }

  patch<T>(endpoint: string, body: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body });
  }

  delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiInstance = new ApiClient(
  `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`
);
