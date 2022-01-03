import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({ type: 'string' }) username: string;
    @ApiProperty({ type: 'string' }) password: string;
}
