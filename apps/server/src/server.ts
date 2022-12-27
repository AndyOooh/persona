import { app } from './app';
import { NODE_ENV, PORT } from './configs';

app.listen(PORT || 8080, () => {
  console.log(`Server is running on port ${PORT}, environment: ${NODE_ENV}`);
});
