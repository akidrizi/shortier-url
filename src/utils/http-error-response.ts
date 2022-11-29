interface HttpErrorResponse {
	error: {
		statusCode: number;
		message: string;
	};
}

export function badRequestResponse(reason: string): HttpErrorResponse {
	return {
		error: {
			statusCode: 400,
			message: reason,
		},
	};
}
