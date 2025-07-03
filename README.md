# FastMCP Math Server

A minimal Model Context Protocol (MCP) server for basic math operations (add, subtract, multiply, divide) using [FastMCP](https://www.npmjs.com/package/fastmcp) and [zod](https://zod.dev/).

## Features

- Exposes four math tools as MCP endpoints: `add`, `subtract`, `multiply`, `divide`
- Input validation with zod
- HTTP streaming transport on port 8083
- Built with TypeScript

## Installation

**Prerequisites:**  
- Node.js (v18+ recommended)
- npm

**Clone the repository:**
```sh
git clone https://github.com/umin-ai/math-mcp.git
cd math-mcp
```

**Install dependencies:**
```sh
npm install
```

## Usage

**Development mode:**
```sh
npm run dev
```

**Production mode:**
```sh
npm run build
npm start
```

The server will listen on [http://localhost:8083/mcp](http://localhost:8083/mcp).

## API / Tools

The server exposes the following tools via the MCP protocol at the `/mcp` endpoint:

| Tool      | Description                | Parameters                | Output         |
|-----------|----------------------------|---------------------------|---------------|
| `add`     | Add two numbers            | `{ a: number, b: number }`| Result as string |
| `subtract`| Subtract two numbers       | `{ a: number, b: number }`| Result as string |
| `multiply`| Multiply two numbers       | `{ a: number, b: number }`| Result as string |
| `divide`  | Divide two numbers         | `{ a: number, b: number }`| Result as string (error if `b` is 0) |

### Example Request

To call the `add` tool using HTTP POST (replace with your MCP client as needed):

```sh
curl -X POST http://localhost:8083/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "tool": "add",
    "parameters": { "a": 5, "b": 3 }
  }'
```

**Example Response:**
```json
{
  "result": "8"
}
```

### Error Handling

- Division by zero in the `divide` tool will return an error.

## Project Structure

```
math-mcp/
├── src/
│   └── math.ts        # Main server code
├── package.json       # Project metadata and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## License

ISC

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

<!-- Author info can be added here if desired -->
