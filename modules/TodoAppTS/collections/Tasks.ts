interface ITasks {
    private?: boolean;
    owner: string;
    text: string;
    createdAt: Date;
    username: string;
}

const Tasks = new Mongo.Collection<ITasks>('tasks');

export default Tasks;
