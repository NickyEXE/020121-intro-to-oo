
class TestClass

  @@all = []

  def initialize(cheese)
    @cheese = cheese
    @@all.push(self)
  end

  def self.all
    @@all
  end

  def cheese
    "fancy #{@cheese}"
  end

  def cheese=(arg)
    @cheese = arg
  end

  def sayCheese
    puts (self.cheese + " is my favorite kind of cheese"
  end

  def self.say_hi_to_friend(friend)
    puts "Saluton, #{friend}"
  end

end
