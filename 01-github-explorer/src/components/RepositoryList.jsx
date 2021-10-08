import { RepositoyItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoyItem repository={repository} />            
                <RepositoyItem repository={repository} />            
                <RepositoyItem repository={repository} />            
                <RepositoyItem repository={repository} />            
            </ul>
        </section>
        )
}