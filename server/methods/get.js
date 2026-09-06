//GET
export function get(responseCode, headerContent, argument, res)  {
    if (!argument) return;

    res.writeHead(responseCode, headerContent);
    res.end(JSON.stringify(argument));
}