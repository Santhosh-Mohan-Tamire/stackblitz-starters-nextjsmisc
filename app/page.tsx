import Table from 'react-bootstrap/Table';

export default function Home() {
  const album = [
    {
      id: 1000,
      song: 'The Sliding Mr. Bones (Next Stop, Pottersville)',
      artist: 'Malcolm Lockyer',
      year: '1961',
    },
    {
      id: 1001,
      song: 'Witchy Woman',
      artist: 'The Eagles',
      year: '1972',
    },
    {
      id: 1002,
      song: 'Shining Star',
      artist: 'Earth, Wind, and Fire',
      year: '1975',
    },
  ];
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {album.map((t: any) => (
          <tr key={t.id}>
            <td>{t.song}</td>
            <td>{t.artist}</td>
            <td>{t.year}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
