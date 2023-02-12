
console.log(
    `%c Kenzo Website `,
    'background:#409EFF;color:#fff;font-weight:bold;border-radius:2px;padding:2px;margin-right:1em;',
    'code by NaCo#0381 '
);
export const scrollTo = (page:any,part: number) => {
    page.to(part)
}
  
export const hrefTarget = (url: string) => {
    window.open(url, '_blank');
}

