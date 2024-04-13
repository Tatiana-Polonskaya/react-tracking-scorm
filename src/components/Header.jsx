import { Typography, Flex, Alert } from "antd";

const { Title } = Typography;

export default function Header() {
  return (
    <header style={{ padding: "25px" }}>
      <Flex justify="center" gap={6} align="center" vertical>
        <Title level={1} align="center">
          Веб-платформа для изучения интерактивных элементов SCORM
        </Title>
        <Title level={3} align="center">
          Эта платформа была создана для изучения параметров проектирования
          пакетов SCORM с использованием различных технологий. Попробуйте
          загрузить два разных интерактивных элемента, и вы увидите таблицу, в
          которой представлены характеристики этих элементов.
        </Title>
        <Alert
          message="Информация"
          description="Обратите внимание, что файлы index.html и imsmanifest.xml в архиве не должны быть вложены в папки, они должны быть доступы сразу же."
          type="info"
          style={{ width: "100%" }}
          showIcon
        />
      </Flex>
    </header>
  );
}
