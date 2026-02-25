import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
=======
// https://vite.dev/config/
>>>>>>> 5f807bdb345c133a5bbdb90aa882de12c81590e7
export default defineConfig({
  plugins: [
    react({
      babel: {
<<<<<<< HEAD
        plugins: ['babel-plugin-react-compiler'], 
      },
    }),
    tailwindcss(), 
  ],
})
=======
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
})
>>>>>>> 5f807bdb345c133a5bbdb90aa882de12c81590e7
