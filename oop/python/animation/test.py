from manim import *

class Heart(Scene):
    def construct(self):
        # Определяем уравнение сердца
        equation = lambda t: np.array([
            16 * np.sin(t)**3,
            13 * np.cos(t) - 5 * np.cos(2*t) - 2 * np.cos(3*t) - np.cos(4*t),
            0
        ]) / 16

        # Создаем кривую Безье с использованием уравнения
        heart_curve = ParametricFunction(equation, t_range=[0, 2 * PI])

        # Рисуем сердце
        heart_curve.set_color(RED)
        self.play(Create(heart_curve))

        # Увеличиваем сердце на 30%
        self.play(heart_curve.animate.scale(1.3))

        # Создаем заливку сердца
        heart_fill = Polygon(*heart_curve.points, color=RED, fill_opacity=0.6)
        # Перемещаем заливку в центр сердца
        heart_fill.move_to(heart_curve.get_center())
        # Добавляем анимацию заливки
        self.play(FadeIn(heart_fill))

        # Добавляем белый текст по центру сердца
        text = Text("I trust u bro", color=WHITE)
        text.move_to(heart_curve.get_center())

        # Оставляем результат на экране
        self.play(Create(text))
        self.wait()
