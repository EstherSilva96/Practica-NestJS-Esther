import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        tenantId: number;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("@prisma/client").$Enums.Role;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string | null;
        password: string;
        tenantId: number;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("@prisma/client").$Enums.Role;
        id: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        tenantId: number;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("@prisma/client").$Enums.Role;
        id: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        tenantId: number;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("@prisma/client").$Enums.Role;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        tenantId: number;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import("@prisma/client").$Enums.Role;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
