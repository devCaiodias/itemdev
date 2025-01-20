type Props = {
    params: Promise<{ idproduto: string | number }>;
  };

export default async function ProdutoDetalhe( {params}: Props) {
    const {idproduto} = await params;
    
    const res = await fetch(`https://api.mercadolibre.com/items/${idproduto}`)
    const produto = await res.json()
    
    return (
        <>
            <h1>{produto.title}</h1>
        </>
    )
}