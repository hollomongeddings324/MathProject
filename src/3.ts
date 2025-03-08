import java.util.*;
public class MathProject {
	private Random rand = new Random();
	public int getRandomNumber(int min, int max) {
		return min + (int)(rand.nextDouble() * ((max - min)));
	}
}
