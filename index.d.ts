export {}

declare namespace proxyman.addons {
    type Method = 'ANY' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'PATCH'

    type Scheme = 'http' | 'https'

    type Flow = {
        serverPort: string
        serverIpAddress: string
        clientIpAddress: string
        remoteDeviceName: string | null
        remoteDeviceIP: string | null
        id: string
        clientPath: string | null
        clientPort: string
        clientName: string | null
    }

    type Context = {
        scriptName: string
        matchingRule: string
        matchingMethod: Method
        isEnableOnRequest: boolean
        isEnableOnResponse: boolean
        filePath: string
        flow?: Flow
    }

    type Request = {
        method: Method
        scheme: Scheme
        host: string
        path: string
        port: number
        queries: Record<string, any>
        headers: Record<string, any>
        body?: string | Record<string, any>
        bodyFilePath?: string
        rawBody?: string
        preserveHostHeader: boolean
        isURLEncoding: boolean
    }

    type Response = {
        statusCode: number
        httpVersion: string
        statusPhrase: string
        headers: Record<string, any>
        body?: string | Record<string, any>
        rawBody?: string
        bodyFilePath?: string
    }

    type onRequest = (context: Context, url: string, request: Request) => Request

    type onResponse = (context: Context, url: string, request: Request, response: Response) => Response
}

declare global {
    const sharedState: Record<string, any>
}
