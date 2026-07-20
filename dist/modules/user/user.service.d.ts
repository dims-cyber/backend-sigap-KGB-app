import { PrismaService } from '../../core/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
    findById(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
}
