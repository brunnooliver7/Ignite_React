import { useState, useEffect } from 'react';
import { RepositoyItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/brunnooliver7/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoyItem key={repository.name} repository={repository} />            
                })}
            </ul>
        </section>
    )
}