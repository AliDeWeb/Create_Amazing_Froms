import { Document } from "mongoose";

interface userModelTypes extends Document {
  name: string;
  email?: string;
  phone: string;
  password: string;
  confirmPassword: string | undefined;
  passwordResetToken?: string;
  passwordResetTokenExpiresIn?: Date;
  profileImg?: string;
  role: "user" | "admin";
  correctPassword(
    candidatePassword: string,
    userPassword: string,
  ): Promise<boolean>;
  isTokenInvalid(jwtIAT: number): boolean;
  generatePasswordResetToken(): string;
}

export default userModelTypes;
