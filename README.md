# 🚀 JsonForge

Convert JSON into clean, structured code instantly.

## ✨ Features
- JSON → Java Classes (POJO)
- JSON → TypeScript Interfaces & Classes
- Supports nested objects & arrays
- Smart type inference
- Fast & simple

## 🛠️ Supported
- Java
- TypeScript (Interface, Class)

## 📸 Example

### Input
```json
{
  "id": 1,
  "name": "John",
  "isActive": true,
  "roles": ["admin"],
  "address": { "city": "Karachi" }
}
```
### Ouput
```java
class User {
  int id;
  String name;
  boolean isActive;
  List<String> roles;
  Address address;
}

class Address {
  String city;
}
```

```typescript
interface User {
  id: number;
  name: string;
  isActive: boolean;
  roles: string[];
  address: Address;
}

interface Address {
  city: string;
}
```


