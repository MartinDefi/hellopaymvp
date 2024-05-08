import { Frog } from 'frog'
 
export const app = new Frog()
 
app.frame('/', (c) => {
  return c.res({/* ... */})
})