import {defineConfig} from 'eslint/config';
import reactTypescript from 'eslint-config-htmlacademy/react-typescript';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  ...reactTypescript,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },
  {
    files: ['*test*'],
    rules: {'@typescript-eslint/unbound-method': 'off'},
  },
  {
    files: ['**/setupTests.ts'],
    rules: {'check-file/filename-naming-convention': 'off'},
  },
]);
