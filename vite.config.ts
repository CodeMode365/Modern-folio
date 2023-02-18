import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import replace from '@rollup/plugin-replace';
import dotenv from "dotenv"

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), replace({
    preventAssignment: true,
    values: {
      'process.env.ServiceID': JSON.stringify(process.env.ServiceID),
      'process.env.TemplateID': JSON.stringify(process.env.TemplateID),
      'process.env.PublicKey': JSON.stringify(process.env.PublicKey),
      'process.env.RecaptchaToken1': JSON.stringify(process.env.RecaptchaToken1),
      'process.env.RecaptchaToken2': JSON.stringify(process.env.RecaptchaToken2),
    }
  }),],
})
