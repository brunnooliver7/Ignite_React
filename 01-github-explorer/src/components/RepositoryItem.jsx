export function RepositoyItem(props) { 

    return (
        <li>
            <strong>{props.repository.name ?? 'valor padrão'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>Acessar repositório</a>
        </li>
    );
}