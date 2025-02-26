type ReadOrWrite = "read" | "write";
type Bulk = "bulk" | "";

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

type ErrorOrSuccess = "error" | "success";

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never

type T = ReadOrWriteBulk<Access>;

type ResponceT = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};

const a: ResponceT = {
  result: "httpError",
};
