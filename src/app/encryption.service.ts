import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private readonly secretKey ="dxfhvdhjgjdhgjdhgjdhgjdhgjdhgjdhgjdhgjd"; 

  encrypt(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, this.secretKey);
    return encrypted.toString();
  }

  decrypt(encryptedData: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    if (decrypted.sigBytes <= 0) {
      throw new Error('Decryption failed. Data may be corrupted.');
    }
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
