import { Wayne } from '@jcubic/wayne';

const app = new Wayne();

app.get('/api/ping', (req, res) => {
   res.text('PONG!');
});
