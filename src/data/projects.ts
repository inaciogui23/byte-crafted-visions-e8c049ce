export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  introPhrase: string;
  fullContent: {
    context: string;
    solution: string;
    results: string;
    technologies: string;
  };
}

export const projects: Project[] = [
  {
    id: "acompanhamento-limites",
    title: "Acompanhamento de Limites",
    shortDescription: "Pipeline analítico para rastreabilidade, validação e monitoramento do processo de concessão de limites.",
    introPhrase: "Neste projeto, desenvolvi uma solução de dados voltada para rastrear, validar e analisar o processo de concessão de limites durante a abertura de contas.",
    fullContent: {
      context: "Durante o processo de abertura de contas, foi identificado um volume relevante de clientes com limite de crédito zerado ou abaixo do esperado.\n\nUma análise inicial sugeria que parte dos clientes não havia aceitado o produto, porém o volume de reclamações indicava possível inconsistência nos dados ou falhas no fluxo operacional.\n\nDiante disso, foi necessária a construção de um pipeline de dados para rastreabilidade, validação e análise do processo de concessão de limites.",
      solution: "Foi desenvolvido um processo de ingestão e tratamento de dados a partir de múltiplas fontes em Excel.\n\nA solução realizava a extração de CNPJs elegíveis com base em regras de negócio e fazia o enriquecimento dos dados por meio de join com uma base de referência contendo atributos cadastrais como CPF, grupo e segmento.\n\nTambém foram implementadas regras de qualidade de dados, identificando CNPJs não encontrados na base de referência e CPFs com renda inconsistente. A partir disso, eram gerados dois arquivos: um arquivo de input para processamento no Databricks e um arquivo de rejeitos para controle de inconsistências e governança dos dados.\n\nNa camada de transformação, foi construída uma pipeline no Databricks com integração entre múltiplas tabelas, aplicação de regras de negócio, padronização de schema, deduplicação e escrita incremental em tabela analítica.\n\nNa camada analítica, foram desenvolvidos dashboards em Power BI com foco em monitoramento e tomada de decisão, incluindo indicadores como volume de CPFs analisados, taxa de aceitação de cartão, média de limite concedido, alavancagem, segmentações e análise por canal de aquisição.",
      results: "A solução permitiu a construção de um pipeline end-to-end, aumentou a rastreabilidade do processo, reduziu análises manuais e gerou visibilidade para identificação de comportamentos, inconsistências e oportunidades de melhoria no fluxo de concessão de limites.",
      technologies: "Python, SQL, PySpark, Databricks, Power BI e Excel.",
    },
  },
  {
    id: "reestruturacao-campanhas",
    title: "Reestruturação da Base de Campanhas e Descontos",
    shortDescription: "Substituição de processo legado em Access por uma solução escalável de ETL com evolução para nuvem.",
    introPhrase: "Neste projeto, desenvolvi uma solução para reestruturar o processamento de uma base crítica de campanhas e descontos, substituindo um fluxo legado limitado por uma arquitetura mais robusta e escalável.",
    fullContent: {
      context: "A base de campanhas, responsável por armazenar descontos de pacotes de tarifas vinculados a CNPJs, era originalmente disponibilizada em formato TXT bruto e desestruturado, contendo dados extraídos diretamente do sistema.\n\nO processamento desses dados era realizado no Microsoft Access, por meio de queries SQL e regras de ETL, até que o aumento no volume de dados tornou o ambiente legado insuficiente para suportar o tratamento necessário.\n\nEsse cenário impactava diretamente diversas áreas que dependiam dessas informações para consulta e análise.",
      solution: "Foi realizada a reengenharia completa do fluxo de ETL, substituindo a solução baseada em Access por uma aplicação desenvolvida em Python.\n\nA solução passou a realizar leitura de arquivos TXT semi-estruturados, parsing, estruturação dos dados, aplicação das regras de transformação e reconstrução da base analítica com maior controle e confiabilidade.\n\nPosteriormente, com foco em evolução tecnológica e escalabilidade, todo o processamento foi migrado para ambiente em nuvem, aproveitando bases já disponíveis nesse ecossistema e implementando atualização incremental.\n\nCom isso, passou a existir uma base centralizada, atualizada e acessível para consulta por usuários autorizados.",
      results: "A solução eliminou o gargalo causado pela ferramenta legada, restabeleceu a continuidade operacional, permitiu escalabilidade no processamento, centralizou o acesso às informações e aumentou a autonomia das áreas que dependiam da base.",
      technologies: "Python, SQL, Databricks, processamento em nuvem e arquivos TXT semi-estruturados.",
    },
  },
  {
    id: "monitoramento-riscos",
    title: "Monitoramento de Riscos Operacionais em Campanhas",
    shortDescription: "Solução de reconciliação de dados para validação de cadastros e mitigação de cobranças indevidas.",
    introPhrase: "Neste projeto, desenvolvi uma solução voltada para controle de risco operacional, validando se cadastros solicitados foram efetivamente realizados e se os parâmetros foram configurados corretamente.",
    fullContent: {
      context: "O processo de cadastro de campanhas e convênios era realizado manualmente em sistema, o que aumentava a exposição a erros operacionais.\n\nEsses erros poderiam gerar cobranças indevidas ao cliente e, consequentemente, necessidade de estorno financeiro, retrabalho e desgaste operacional.\n\nDiante desse cenário, tornou-se necessário criar um mecanismo de controle e validação baseado em dados.",
      solution: "Foi desenvolvida uma solução de reconciliação de dados entre duas fontes: uma base em Excel contendo tudo o que havia sido solicitado para cadastro e a base de campanhas, que representava o que estava efetivamente cadastrado no sistema.\n\nA solução realizava ingestão, padronização e comparação entre os dados, verificando se cada solicitação havia sido cadastrada, se ainda não havia sido cadastrada ou, caso cadastrada, se os parâmetros estavam corretos.\n\nNos casos de inconsistência, o relatório final apontava exatamente onde estava o erro, facilitando a correção e aumentando a rastreabilidade operacional.\n\nO output consistia em um relatório analítico de riscos operacionais relacionado a campanhas e convênios, com detalhamento completo do status e das divergências encontradas.",
      results: "A solução mitigou erros humanos, fortaleceu o controle operacional e possibilitou alcançar a marca de zero cobranças indevidas nesse fluxo, além de zero estornos decorrentes dessas falhas.",
      technologies: "Python, Excel e técnicas de validação e reconciliação de dados.",
    },
  },
  {
    id: "automacao-conta-salario",
    title: "Automação de Geração de Arquivos para Abertura de Conta Salário",
    shortDescription: "Automação de processo operacional com aplicativo em Python, reduzindo horas de trabalho para poucos minutos.",
    introPhrase: "Neste projeto, desenvolvi uma automação para eliminar etapas manuais na montagem de arquivos necessários para abertura de contas salário, trazendo mais velocidade, padronização e confiabilidade ao processo.",
    fullContent: {
      context: "O processo de montagem de arquivos no padrão exigido para abertura de contas salário era realizado manualmente, com diversas etapas repetitivas e geração de arquivos individualizados por CNPJ.\n\nEsse fluxo demandava muito tempo do colaborador, principalmente em grupos com muitos CNPJs, e aumentava significativamente o risco de erros humanos, impactando a produtividade e a eficiência da equipe.",
      solution: "Foi desenvolvido um software em Python, empacotado em formato de aplicativo, com interface intuitiva, logs de erro e barra de progresso.\n\nA automação passou a manipular automaticamente as bases necessárias e gerar todos os arquivos prontos para abertura, exigindo apenas que o colaborador colocasse as bases na mesma pasta do aplicativo e executasse o processo com poucos cliques.\n\nO robô realizava a leitura das bases, o tratamento dos dados, a montagem dos arquivos finais e a organização dos outputs.\n\nA única etapa manual restante do processo passou a ser o preenchimento do PAPI para solicitar a abertura das contas.",
      results: "A solução reduziu para zero os erros diretos na montagem dos arquivos, diminuiu drasticamente o tempo de processamento e transformou uma atividade que antes levava horas em uma execução automatizada com tempo médio de aproximadamente 10 minutos.\n\nAlém disso, o tempo efetivo de dedicação do colaborador caiu de horas para menos de um minuto, já que bastava executar o robô e seguir com outras atividades enquanto o processamento acontecia.",
      technologies: "Python, manipulação de arquivos, automação de processos e empacotamento de aplicação.",
    },
  },
];
