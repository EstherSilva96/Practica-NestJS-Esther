import { LoginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: LoginDto): Promise<string>;
}
