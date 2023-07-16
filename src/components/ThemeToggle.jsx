import { Box, Flex, Text } from "@chakra-ui/react";

export default function ThemeToggle() {
  return (
    <Flex alignItems="flex-end" gap={3}>
      <Text fontSize={12} fontWeight={600} letterSpacing={1.1} lineHeight={1}>
        THEME
      </Text>
      <Flex flexDirection="column" gap={1}>
        <Flex justifyContent="space-between">
          <Text fontSize={12} fontWeight={600}>
            1
          </Text>
          <Text fontSize={12} fontWeight={600}>
            2
          </Text>
          <Text fontSize={12} fontWeight={600}>
            3
          </Text>
        </Flex>
        <Box bg="white" h={3} w={12} borderRadius={10}>
          <Box bg="grey" h={3} w={3} borderRadius={10} cursor="pointer"></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Flex>
    </Flex>
  );
}
