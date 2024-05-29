import pygame
from copy import deepcopy
from random import choice, randrange

# Создаем игровое окно
W, H = 10, 20
TILE = 45
game_dis = W * TILE, H * TILE
display = 750, 940
fps = 60

# Создаем окно для игры
pygame.init()
screen = pygame.display.set_mode(display)
game_screen = pygame.Surface(game_dis)
clock = pygame.time.Clock()

# Делаем сетку для игровок окна
grid = [pygame.Rect(x * TILE, y * TILE, TILE, TILE) for x in range(W) for y in range(H)]

# Координаты фигур по ПЛИТАМ
figures_position = [[(-1, 0), (-2, 0), (0, 0), (1, 0)],
                    [(0, -1), (-1, -1), (-1, 0), (0, 0)],
                    [(-1, 0), (-1, 1), (0, 0), (0, -1)],
                    [(0, 0), (-1, 0), (0, 1), (-1, -1)],
                    [(0, 0), (0, -1), (0, 1), (-1, -1)],
                    [(0, 0), (0, -1), (0, 1), (-1, -1)],
                    [(0, 0), (0, -1), (0, 1), (-1, -0)]]

# Массив экзэмплярования класса (откуда будем брать фигуры)
figures = [[pygame.Rect(x + W // 2, y + 1, 1, 1) for x, y in figures_position] for figures_position in figures_position]
# Отрисовка каждой чати фигуры (основа)
figure_rect = pygame.Rect(0, 0, TILE - 2, TILE -2)
# Карта игрового поля, в котором будем помечать положение упавщих фигур
field = [[0 for i in range(W)] for j in range(H)]

# Падение фигуры
anim_count, anim_speed, anim_limit = 0, 60, 2000
figure = deepcopy(choice(figures))

# Фоны с картинкой для игрового окна
image1 = pygame.image.load("tetris/im.jpg.jpg").convert()
image2 = pygame.image.load("tetris/im1.jpg.jpg").convert()

# Создание границ (с помощью функции, которая проверяет границы)
def check_borders():
    if figure[i].x < 0 or figure[i].x > W - 1:
       return False
    elif figure[i].y > H - 1 or field[figure[i].y][figure[i].x]:
        return False
    return True

# Окно игры, функция
while True:
    dx, rotate = 0, False
    screen.blit(image1, (0, 0))
    screen.blit(image2, (20, 20))
    game_screen.blit(image2, (0, 0))

    # Перемещение фигур
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
                exit()
        if event.type == pygame.KEYDOWN:
           if event.key == pygame.K_LEFT:
              dx = -1
           elif event.key == pygame.K_RIGHT:
               dx = 1
           elif event.key == pygame.K_DOWN:
               anim_limit = 100
           elif event.key == pygame.K_UP:
               rotate = True
    
    # Движение "X" (право/лево)
    figure_oldpos = deepcopy(figure)
    for i in range(4):
        figure[i].x += dx
        if not check_borders():
            figure = deepcopy(figure_oldpos)
            break

    # Движение "Y" (вниз)
    anim_count += anim_speed
    if anim_count > anim_limit:
        anim_count = 0
        figure_oldpos = deepcopy(figure)
        for i in range(4):
            figure[i].y += 1
            if not check_borders():
               for i in range(4):
                   field[figure_oldpos[i].y][figure_oldpos[i].x] = pygame.Color("white")
            figure = deepcopy(choice(figures))
            anim_limit = 2000
            break

    # Вращение фигур по оси
    center = figure[0]
    figure_oldpos = deepcopy(figure)
    if rotate:
       for i in range(4):
           x = figure[i].y - center.y
           y = figure[i].x - center.x
           figure[i].x = center.x - x
           figure[i].y = center.y + y
           if not check_borders():
              figure = deepcopy(figure_oldpos)
              break
           
    # Переменная для последней линии на игровом поле
    line = H -1
    for row in range(H -1, -1, -1):
        count = 0
        for i in range(W):
            if field[row][i]:
                count += 1
            field[line][i] = field[row][i]
        if count < W:
            line -= 1

    # Отрисовка квадратов для поля (пустые, но с границами)
    [pygame.draw.rect(game_screen, (40, 40, 40), i_rect, 1) for i_rect in grid]

    # Отрисовка фигуры (действие)
    for i in range(4):
        figure_rect.x = figure[i].x * TILE
        figure_rect.y = figure[i].y * TILE
        pygame.draw.rect(game_screen, pygame.Color('white'), figure_rect)

    # Отрисовка упавщих фигур
    for y, raw in enumerate(field):
        for x, col in enumerate(raw):
            if col:
                figure_rect.x, figure_rect.y = x * TILE, y * TILE
                pygame.draw.rect(game_screen, col, figure_rect)

    pygame.display.flip()
    clock.tick(fps)