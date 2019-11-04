/**
 * RESPOSTA:
 *    JEREMY BOWERS, Homem 34 anos 1,83 dirige um honda azul.
 */

/**
 * Dicas:
 *
 * DICA 1
 *
 *    Tente ver o que há dentro do arquivo 'pessoas' usando o comando 'head':
 *           head -n 20 pessoas
 *    Isso vai te mostrar as 20 primerias linhas do arquivo 'pessoas'
 *
 * DICA 2
 *
 *    Tente usar o comando 'grep' para procruar por pistas no arquivo 'cena-do-crime'
 *           grep "PISTA" cena-do-crime
 *
 * DICA 3
 *
 *    Para rastrear nossa potenical testemunha, nós precisamos descobrir onde ela vive.
 *
 *    Tente usar 'head' em algum dos arquivos como 'pessoas' e 'automoveis' e veja
 *    onde podemos achar isso
 *
 * DICA 4
 *
 *    Para achar todos os endereços de Annabel, use o arquivo 'pessoas'
 *           grep "Annabel" pessoas
 *    Perceba que nem todos os resultados são importantes para investigação.
 *    Lembre-se do que sabemos sobre Annabel.
 *
 * DICA 5
 *
 *    Entreviste duas possíveis testemunhas, lendo a linha correta do endereço
 *    em que elas vivem:
 *           head -n 173 ruas/Rua_Mattapan | tail -n 1
 *    Isso vai te dar somente a linha 173 da rua Mattapan, porque isso vai pegar
 *    as primeiras 173 linhas e pegar a última linha entre estas
 *
 * DICA 6
 *
 *    Para achar uma placa de carro, ou um carro correspondente, vocie pode usar
 *    'grep' no arquivo 'automoveis':
 *
 * 	       grep "Honda" automoveis
 *         grep "Blue" automoveis
 *         grep "L337" automoveis
 *
 *    Isso não nos dá nada útil (por que não?). Tente usar 'head' no arquivo
 *    para investigar a sua estrutura.
 *
 *
 * DICA 7
 *
 *    Na verdade, para pegar as informações sobre os veículos que batam com a nossa descrição,
 *    nós precisamos pegar múltiplas linhas AO REDOR de cada uma que achamos. Nós podemos usar
 *    as opções -A, -B, -C opções com 'grep:
 *
 *           grep -A 5 "L337" automoveis
 *
 *    Isso vai pegar os carros com a placa que batam com "L337" e, para cada um,
 *    vai nos mostrar as 5 linhas DEPOIS dele.
 *
 *
 * DICA 8
 *
 *    Para ver quem foi membro de diferentes grupos, você pode concatenar a lista de de assinatura deles
 *    e pesquisar com isso:
 *
 *    cat Delta_SkyMiles AAA United_Clube_de_Pontos | grep "John Smith"
 *
 *    Se você só quiser ver o número de combinações, você usar a opção '-c'
 *
 *    cat Delta_SkyMiles AAA United_Clube_de_Pontos | grep "John Smith"
 */
