# @frontend-monorepo/backend-client

for frontend monorepo.

## Usage

Initialize the backend client.

```ts
import BackendClient from '@frontend-monorepo/backend-client';

const backendClient = new BackendClient({
  baseUrl: 'https://api.example.com',
});
```

Use the client in React a component.

```tsx
const ExampleComponent = () => {
  const [me, setMe] = useState<GetMeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    backendClient.user
      .getMe()
      .then((res) => {
        setMe(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <div>
      <h2>Me</h2>
      <pre>{JSON.stringify(me, null, 2)}</pre>
    </div>
  );
};
```
