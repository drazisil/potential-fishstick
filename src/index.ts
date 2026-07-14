export function getArgs(cmdLine = process.argv ?? []): { argv: string[]; argc: number } {
  const args = cmdLine.slice(1);
  return {
    argv: args,
    argc: args.length,
  };
}
